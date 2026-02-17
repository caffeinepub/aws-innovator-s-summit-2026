import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  public type EventId = Nat;
  public type Event = {
    id : EventId;
    title : Text;
    description : Text;
    start_time : Text;
    end_time : Text;
    location : Text;
  };

  public type ProgrammeOverview = {
    events : [Event];
    last_updated : Text;
  };

  let events = Map.empty<EventId, Event>();

  var last_updated : Text = "";
  var next_id : EventId = 0;

  public shared ({ caller }) func addEvent(title : Text, description : Text, start_time : Text, end_time : Text, location : Text) : async EventId {
    let event : Event = {
      id = next_id;
      title;
      description;
      start_time;
      end_time;
      location;
    };
    events.add(next_id, event);
    next_id += 1;
    next_id - 1 : EventId;
  };

  public shared ({ caller }) func updateEvent(id : EventId, title : Text, description : Text, start_time : Text, end_time : Text, location : Text) : async () {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event not found") };
      case (?_) {
        let updatedEvent : Event = {
          id;
          title;
          description;
          start_time;
          end_time;
          location;
        };
        events.add(id, updatedEvent);
      };
    };
  };

  public shared ({ caller }) func deleteEvent(id : EventId) : async () {
    if (events.containsKey(id)) {
      events.remove(id);
    } else {
      Runtime.trap("Event not found");
    };
  };

  public query ({ caller }) func getEvent(id : EventId) : async ?Event {
    events.get(id);
  };

  public query ({ caller }) func getAllEvents() : async [Event] {
    events.values().toArray();
  };

  public shared ({ caller }) func updateProgrammeOverview(lastUpdateTime : Text) : async () {
    last_updated := lastUpdateTime;
  };

  public query ({ caller }) func getProgrammeOverview() : async ProgrammeOverview {
    let eventsArray = events.values().toArray();
    {
      events = eventsArray;
      last_updated;
    };
  };
};
