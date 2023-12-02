from flask import Flask, request
from flask_cors import CORS, cross_origin
from typing import Optional

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
@cross_origin()
def handle_post_request():
    if request.method == 'OPTIONS':
    # Обработка предварительных запросов OPTIONS
        return '', 200
    data: Optional[dict] = request.json  # Объявляем data как Optional[dict]
    if data is None:
        return "No data received"
    
    area_of_development = data.get('areaOfDevelopment')
    name = data.get('name')
    if area_of_development is None:
        return "No area_of_development received"
    concatenated_string = area_of_development + "_" + name
    return concatenated_string

if __name__ == '__main__':
    app.run(debug=True)