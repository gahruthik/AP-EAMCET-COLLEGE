import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SearchForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rank: "",
    category: "OC",
    gender: "BOYS",
    branch: "CSE",
  });

  const [collegeQuery, setCollegeQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const branches = [
    "AI",
    "AID",
    "AIM",
    "CAI",
    "CSE",
    "CSC",
    "CSD",
    "CSM",
    "DS",
    "ECE",
    "EEE",
    "MEC",
    "CIV",
    "CHE",
    "INF",
    "IOT",
    "AUT",
  ];

  const categories = [
    "OC",
    "OC_EWS",
    "BCA",
    "BCB",
    "BCC",
    "BCD",
    "BCE",
    "SC",
    "ST",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const searchCollege = async (value) => {
    setCollegeQuery(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await api.get(
        `/colleges/search?query=${value}`
      );

      setSuggestions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/predict", {
        rank: Number(formData.rank),
        category: formData.category,
        gender: formData.gender,
        branch: formData.branch,
        targetCollegeId: selectedCollege?._id,
      });

      navigate("/results", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Rank */}

        <div>
          <label className="block font-semibold mb-2">
            AP EAMCET Rank
          </label>

          <input
            type="number"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            placeholder="Enter your rank"
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Category */}

        <div>
          <label className="block font-semibold mb-2">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Gender */}

        <div>
          <label className="block font-semibold mb-2">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="BOYS">Boys</option>
            <option value="GIRLS">Girls</option>
          </select>
        </div>

        {/* Branch */}

        <div>
          <label className="block font-semibold mb-2">
            Preferred Branch
          </label>

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            {branches.map((branch) => (
              <option key={branch}>{branch}</option>
            ))}
          </select>
        </div>

        {/* Target College */}

        <div className="relative">

          <label className="block font-semibold mb-2">
            🎯 Target College (Optional)
          </label>

          <input
            type="text"
            placeholder="Type AU, JNTUK, VR, ANITS..."
            value={collegeQuery}
            onChange={(e) => searchCollege(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          {suggestions.length > 0 && (

            <div className="absolute w-full bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">

              {suggestions.map((college) => (

                <div
                  key={college._id}
                  onClick={() => {
                    setSelectedCollege(college);
                    setCollegeQuery(
                      `${college.collegeName} (${college.branchCode})`
                    );
                    setSuggestions([]);
                  }}
                  className="p-3 cursor-pointer hover:bg-blue-100"
                >
                  <div className="font-semibold">
                    {college.collegeName}
                  </div>

                  <div className="text-sm text-gray-600">
                    {college.branchCode}
                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg cursor-pointer"
        >
          Predict Colleges
        </button>

      </form>

    </div>
  );
}

export default SearchForm;