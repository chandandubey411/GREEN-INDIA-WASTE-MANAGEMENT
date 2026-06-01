import urllib.request
try:
    response = urllib.request.urlopen("http://localhost:5174/sonu-kumar.jpg")
    print(f"Status code: {response.status}")
    print(f"Content length: {len(response.read())}")
except Exception as e:
    print(f"Error: {e}")
