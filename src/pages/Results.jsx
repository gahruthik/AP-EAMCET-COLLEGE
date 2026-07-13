import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
function Results() {
  const { state } = useLocation();

  const targetCollege = state?.targetCollege;
  const alternatives = state?.alternatives || [];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="bg-blue-700 text-white px-5 py-2 rounded"
        >
          Back
        </Link>

        {targetCollege && (

          <div className="bg-white shadow rounded-xl p-6 mt-6">

            <h2 className="text-3xl font-bold text-blue-700">
              🎯 Target College
            </h2>

            <p className="mt-4">
              <strong>College :</strong> {targetCollege.collegeName}
            </p>

            <p>
              <strong>Branch :</strong> {targetCollege.branchCode}
            </p>

            <p>
              <strong>Your Rank :</strong> {targetCollege.yourRank}
            </p>

            <p>
              <strong>Previous Last Rank :</strong> {targetCollege.lastRank}
            </p>

            <p className="mt-4 text-xl font-bold">

              {targetCollege.status === "HIGH_CHANCE" && "🟢 High Chance"}

              {targetCollege.status === "MODERATE_CHANCE" &&
                "🟡 Moderate Chance"}

              {targetCollege.status === "LOW_CHANCE" &&
                "🔴 Low Chance"}

            </p>

          </div>

        )}

        <h2 className="text-3xl font-bold mt-10 mb-5">
          Recommended Colleges
        </h2>

        <div className="grid gap-5">

          {alternatives.map((college) => (

            <div
              key={college._id}
              className="bg-white shadow rounded-xl p-5"
            >

              <h3 className="text-xl font-bold">
                {college.collegeName}
              </h3>

              <p>Branch : {college.branchCode}</p>

              <p>District : {college.district}</p>

              <p>Fee : ₹{college.fee}</p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Results;