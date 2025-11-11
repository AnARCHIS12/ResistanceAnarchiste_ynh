from flask import Flask, send_from_directory, send_file
import os

app = Flask(__name__, static_folder='frontend/build', static_url_path='')

# Configuration pour YunoHost
app.config['SECRET_KEY'] = '__SECRET_KEY__'

# Servir le frontend React
@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# API routes
@app.route('/api/health')
def health():
    return {"status": "ok", "app": "resistance-anarchiste"}

if __name__ == '__main__':
    port = int(os.environ.get('PORT', __PORT__))
    app.run(host='0.0.0.0', port=port, debug=False)