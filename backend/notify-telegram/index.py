import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка уведомлений в Telegram о RSVP и музыкальных предпочтениях гостей
    Args: event - dict с httpMethod, body (name, type, data)
          context - object с request_id
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    print(f"Bot token exists: {bool(bot_token)}, Chat ID exists: {bool(chat_id)}")
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Telegram credentials not configured'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    notification_type = body_data.get('type')
    name = body_data.get('name', 'Неизвестный гость')
    data = body_data.get('data', {})
    
    print(f"Notification type: {notification_type}, Name: {name}")
    
    if notification_type == 'rsvp':
        attending = data.get('attending')
        emoji = '✅' if attending == 'yes' else '❌'
        status = 'ПОДТВЕРДИЛ участие' if attending == 'yes' else 'НЕ СМОЖЕТ присутствовать'
        message = f"{emoji} <b>Новый ответ на приглашение</b>\n\n👤 Гость: {name}\n📝 Статус: {status}"
    
    elif notification_type == 'music':
        genres = data.get('genres', [])
        custom_songs = data.get('customSongs', '')
        
        genre_names = {
            'pop': 'Поп',
            'rock': 'Рок',
            'dance': 'Танцевальная',
            'retro': 'Ретро',
            'jazz': 'Джаз',
            'russian': 'Русская'
        }
        
        genres_text = ', '.join([genre_names.get(g, g) for g in genres])
        
        message = f"🎵 <b>Музыкальные предпочтения</b>\n\n👤 Гость: {name}\n🎼 Жанры: {genres_text}"
        
        if custom_songs:
            message += f"\n🎤 Любимые песни:\n{custom_songs}"
    
    else:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Invalid notification type'})
        }
    
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    
    payload = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    data_encoded = urllib.parse.urlencode(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data_encoded, method='POST')
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            print(f"Telegram API response: {result}")
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'success': True, 'message': 'Notification sent'})
            }
    except Exception as e:
        print(f"Error sending to Telegram: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }