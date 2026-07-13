function Footer() {
    return (
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
  
          <div className="grid md:grid-cols-3 gap-10">
  
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                AP EAMCET College Predictor
              </h2>
  
              <p className="text-gray-300 leading-7 text-justify">
                AP EAMCET College Predictor helps students estimate their admission
                chances based on previous year's AP EAMCET cutoff data. Students
                can search colleges using their rank, category, gender, branch,
                and even check the chances of getting admission into a specific
                college.
              </p>
            </div>
  
            {/* Recommendation */}
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                📌 Recommendation Criteria
              </h2>
  
              <ul className="space-y-2 text-gray-300">
                <li>✔ Previous Year's AP EAMCET Cutoff Trends</li>
                <li>✔ Placement Records</li>
                <li>✔ College Reputation</li>
                <li>✔ NAAC / NBA Accreditation</li>
                <li>✔ Infrastructure & Facilities</li>
                <li>✔ Academic Performance</li>
                <li>✔ Overall Student Preference</li>
              </ul>
            </div>
  
            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                ⚠ Disclaimer
              </h2>
  
              <p className="text-gray-300 leading-7 text-justify">
                This website is developed for educational and guidance purposes
                only. The predictions are generated using previous year's AP
                EAMCET cutoff data and additional quality indicators such as
                placements, institutional reputation, accreditation, and overall
                academic performance.
              </p>
  
              <p className="text-gray-300 mt-4 leading-7 text-justify">
                Final admission depends on the official AP EAMCET counselling
                process, reservation policies, seat availability, and current
                year's cutoff trends published by APSCHE.
              </p>
            </div>
  
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>
  
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AP EAMCET College Predictor.
              All Rights Reserved.
            </p>
  
            <p className="text-gray-400 text-sm text-center">
            Data Source: Previous Year's AP EAMCET Official Cutoff Data

Version: 1.0

Last Updated: 2025 Counselling Data
            </p>
  
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;