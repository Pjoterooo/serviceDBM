from flask import Flask, jsonify
from flask_cors import CORS
import oracledb
from config import DB_USER, DB_PASSWORD, DB_DSN

app = Flask(__name__)
CORS(app)

user = DB_USER
password = DB_PASSWORD
dsn = DB_DSN

@app.route('/samochody', methods=['GET'])
def get_samochody():

    try:
        connection = oracledb.connect(user=user, password=password, dsn=dsn)
        cursor = connection.cursor()
        sql = "SELECT * FROM samochody"
        cursor.execute(sql)

        result = cursor.fetchall()
        samochody = [dict(zip([desc[0].lower() for desc in cursor.description], row)) for row in result]

        cursor.close()
        connection.close()
        return jsonify(samochody)
    except oracledb.DatabaseError as error:
        return jsonify({'error': str(error)})

@app.route('/dodajsamochody', methods=['POST'])
def add_samochody():
    try:
        data = request.json
        connection = oracledb.connect(user=user, password=password, dsn=dsn)
        cursor = connection.cursor()
        sql = "INSERT INTO samochody2 (vin, nr_rejestracyjny, marka, typ, cena, uwagi) VALUES(:vin, :nr_rejestracyjny, :marka, :typ, :cena, :uwagi)"
        cursor.execute(sql, {'vin': data['vin'], 'nr_rejestracyjny': data['nr_rejestracyjny'], 'marka': data['marka'], 'typ': data['typ'], 'cena': data['cena'], 'uwagi': data['uwagi']})
        connection.commit()

        cursor.close()
        connection.close()

        return jsonify({'succes' : True , 'message': 'Samochod dodany'})
    
    except (oracledb.DatabaseError, KeyError) as error:
        return jsonify({'success': False, 'error': str(error)}), 400

if __name__ == '__main__':
    app.run(debug=True, host = '127.0.0.1', port = 5000)
