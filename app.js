// Create ParentSchool Class

// create an empty class named School
class School {
  // create an empty constructor()
  constructor(name, level, numberOfStudents) {
    // set the School properties
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

    // create getters for the name, level, and numberOfStudents
    get name() {
      return this._name;
    };
    get level() {
      return this._level;
    };
    get numberOfStudents() {
      return this._numberOfStudents;
    };

    // create a method named quickFacts
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    // create a static method named pickSubstituteTeacher
    static pickSubstituteTeacher(substituteTeachers) {
    // randomly generate a whole no. 0 - one less than substituteTeachers's length
    // access and return the substitute teacher
      return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
    }

    // create setter for numberOfStudents
    set numberOfStudents(value) {
      if (value.isNaN()) {
      return 'Invalid input: numberOfStudents must be set to a Number.';
    } else {
      return this._numberOfStudents = value;
    }
  }
}

// Create PrimarySchool Class

// create an empty PrimarySchool class that extends School
class PrimarySchool extends School {
  // create a constructor() that accepts three arguments
  constructor(name, numberOfStudents, pickupPolicy) {
    // call super on the first line of the PrimarySchool's constructor()
    super(name, 'primary', numberOfStudents);
    // use the remaining argument to set the pickupPolicy property
    this._pickupPolicy = pickupPolicy;
    }
    // add new getter to the PrimarySchool class
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }

// Create HighSchool Class

// create an empty HighSchool class that extends School
class HighSchool extends School {
  // create a constructor() that accepts arguments for name, numberOfStudents, and sportsTeams
  constructor(name, numberOfStudents, sportsTeams) {
    // call super and pass it name, 'high', and numberOfStudents
    super(name, 'high', sportsTeams);
    // use the remaining argument to set the sportsTeams property
    this._sportsTeams = sportsTeams;
    }
    // add new getter to the PrimarySchool class
    get sportsTeams() {
      return this._sportsTeams;
    }
  }


// Instances of PrimarySchool and HighSchool

    // create a PrimarySchool instance name lorraineHansbury
    const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
      // call .quickFacts() on the lorraineHansbury instance
      lorraineHansbury.quickFacts();
      // call .pickSubstituteTeacher() on the School
      School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

    // create a HighSchool instance name alSmith
    const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
      // get the value saved to the sportsTeams property in alSmith
      console.log(alSmith.sportsTeams);

/* Extra Tasks */

// Cute school class

// create a CuteSchool class
class CuteSchool {
  constructor(nickname, averageTestScores, studentOverview, rankType) {
    this._nickname = nickname;
    this._averageTestScores = averageTestScores;
    this._studentOverview = studentOverview;
    this._rankType = rankType;
  }

    // create getters for the nickname, averageTestScores, studentOverview and rankType
    get nickname() {
      return this._nickname;
    };
    get averageTestScores() {
      return this._averageTestScores;
    };
    get studentOverview() {
      return this._studentOverview;
    };
    get rankType() {
      return this._rankType;
    };

    // create a method named finalResult
    finalResult() {
      console.log(`\The Final Result of ${this.nickname} in this semester are:\ 1. Student Overview: ${this.studentOverview};\ 2.  Average Test Scores: ${this.averageTestScores};\ and\ 3. His/Her Rank in class is: ${this.rankType}. Thank you for listening!`);
    }
  }

// create an empty finalResult class that extends CuteSchool
class finalResult extends CuteSchool {
  // create a constructor() that accepts four arguments
  constructor(nickname, averageTestScores, studentOverview, rankType) {
    // call super on the first line of the finalResult's constructor()
    super(nickname, averageTestScores, studentOverview, rankType);
    }
  }

// Instances of finalResult

    // create a finalResult instance name newStudent
    const newStudent = new finalResult('Meow Nalini', 9.9, 'Exellent, Cutest', 'No. #1');
      // call .finalResult() on the newStudent instance
     newStudent.finalResult();

