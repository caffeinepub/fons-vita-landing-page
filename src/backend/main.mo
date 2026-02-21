import Time "mo:core/Time";
import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type ContactForm = {
    timestamp : Time.Time;
    name : Text;
    email : Text;
    company : Text;
    message : Text;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Text.compare(form1.email, form2.email);
    };
  };

  let submissions = Map.empty<Text, ContactForm>();

  func generateSubmissionId() : Text {
    Time.now().toText() # "_" # submissions.size().toText();
  };

  func validateEmail(email : Text) : { #ok : Text } or { #err : Text } {
    if (email.contains(#char '@')) { #ok(email) } else {
      #err("Invalid email address");
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, company : Text, message : Text) : async Text {
    let validatedEmail = switch (validateEmail(email)) {
      case (#err(errorText)) { Runtime.trap(errorText) };
      case (#ok(email)) { email };
    };

    // Anti-spam measure: check for duplicate messages
    let similarMessages = submissions.values().filter(
      func(contact) { Text.equal(contact.message, message) }
    );
    if (similarMessages.next() != null) {
      Runtime.trap("Duplicate message detected");
    };

    let contactForm : ContactForm = {
      timestamp = Time.now();
      name;
      email = validatedEmail;
      company;
      message;
    };

    // Generate unique submission id
    let id = generateSubmissionId();
    submissions.add(id, contactForm);

    id;
  };

  public query ({ caller }) func getContactForm(id : Text) : async ContactForm {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Contact form not found") };
      case (?contactForm) { contactForm };
    };
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getContactFormsByEmail(email : Text) : async [ContactForm] {
    let filtered = submissions.values().filter(
      func(contact) { Text.equal(contact.email, email) }
    );
    filtered.toArray();
  };

  public query ({ caller }) func countContactForms() : async Nat {
    submissions.size();
  };

  public query ({ caller }) func getComponentFeatures() : async {
    heroSection : Bool;
    aboutSection : Bool;
    businessAreasSection : Bool;
    valuesSection : Bool;
    contactSection : Bool;
    footer : Bool;
  } {
    let features = {
      heroSection = true;
      aboutSection = true;
      businessAreasSection = true;
      valuesSection = true;
      contactSection = true;
      footer = true;
    };
    features;
  };
};
