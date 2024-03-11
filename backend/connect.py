from flask import Flask, jsonify
from flask_cors import CORS
import oracledb

app = Flask(__name__)
CORS(app)

@app.route('/samochody', methods=['GET'])
def get_samochody():
    user = 'x'
    password = 'x'
    dsn = 'x'

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

if __name__ == '__main__':
    app.run(debug=True)
