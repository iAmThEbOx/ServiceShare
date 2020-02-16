from flask import sqlite3, Flask
app = Flask(__name__)


class Event: 
    def __init__(self, id, location, startDate, endDate, title, description, purpose, lat, long, estimatedTurnout):
        self.location = location
        self.id = id
        self.startDate = startDate
        self.endDate = endDate
        self.title = title
        self.description = description
        self.purpose = purpose
        self.estimatedTurnout = estimatedTurnout

# state events as an endpoint to then send back response 
@app.route('/events', methods="GET")
def events(request):
    evnt = request.get_data()
    return evnt
    # retrieve data from database, return the response
       

if __name__ == '__main__':
    app.run(localhost, debug=True, port=8000)
        





    