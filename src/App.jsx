import { useState } from "react";




function App() {


  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [age, setAge] = useState(0);
  const [yearText, setYearText] = useState('year');
  const [showAge, setShowAge] = useState(false);


  const handleInput = (event) => {
    setDateOfBirth(event.target.value);
  }

  const calculateAge = () => {

    if (!dateOfBirth) {
      alert("Please Enter Valid Format");
      setShowAge(false);

      return;
    }

    var realDate = new Date(dateOfBirth);
    if (dateOfBirth === "" || dateOfBirth === null) {
      alert("Enter valid date");
      setShowAge(false);

      return;
    }

    if (realDate >= new Date()) {
      alert("Can Not Display Future Date");
      setShowAge(false);

      return;
    }


    var month_diff = Date.now() - realDate.getTime();

    var age_dt = new Date(month_diff);

    var year = age_dt.getUTCFullYear();

    let currentAge = Math.abs(year - 1970);

    setAge(currentAge);
    setYearText(currentAge > 1 ? 'years' : 'year');
    setShowAge(true);

  }

  return (
    <>

      <div className="container mx-auto px-4 bg-white rounded-xl shadow-lg w-1/2 mt-10">
        <h1 className="text-4xl text-blue-800 text-center font-bold ... py-6  opacity-75">Age Calculator</h1>
        <div>
          <label htmlFor="date" className="block text-center
             text-blue-800 font-bold text-xl opacity-75 mb-2">
            Enter your date of birth</label>
          <input className="block mx-auto mb-3 px-10 sm:px-20 md:px-28 xl:px-40 py-2 border-2
              border-dark-600 ... text-left" type="date" name="date"
            id="date" onChange={handleInput} />
          <button className="bg-blue-600 hover:bg-blue-900 ... py-2  px-4 
                       text-white font-bold block mx-auto rounded-lg my-6"
            type="button" onClick={calculateAge}>Calculate
            Age
          </button>
        </div>

        {showAge && <div className="text-center font-bold text-xl
                           opacity-75 pb-3 mt-4 text-blue-800">
          You are {age} {yearText} old
        </div>}

      </div>
    </>
  )

}
export default App;

