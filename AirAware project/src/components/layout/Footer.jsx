import React from 'react';
import { setInputValue } from "../../redux/Searchvalue"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const cities = [
  "Mumbai", "Delhi", "Bengaluru", "Kolkata", "Chennai", "Hyderabad",
  "Ahmedabad", "Pune", "Jaipur", "Surat", "Vadodara", "Indore",
  "Coimbatore", "Chandigarh", "Nagpur", "Agra", "Patna", "Bhopal",
  "Visakhapatnam", "Gurugram", "Faridabad", "Kochi", "Mangalore",
  "Jodhpur", "Ranchi", "Amritsar", "Varanasi", "Bhubaneswar",
  "Mysuru", "Tiruchirappalli", "Madurai", "Tirupati", "Dehradun",
  "Shimla", "Guwahati", "Kanpur", "Nashik", "Udaipur", "Jabalpur",
  "Aurangabad", "Jamshedpur", "Solapur", "Durgapur", "Bhilai",
  "Siliguri", "Kakinada", "Raipur", "Aligarh", "Muzaffarpur",
  "Haldwani", "Rourkela", "Sambalpur", "Ludhiana", "Fatehgarh Sahib",
  "Moradabad", "Shivamogga", "Patiala", "Jhansi", "Jammu",
  "Srinagar", "Pondicherry", "Daman", "Diu",
  "Lakshadweep",
];

// Generate random colors for the dots
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Footer = () => {
  // const [valuecity, setValuecity] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const citiessearchweather = (city) => {
   
      dispatch(setInputValue(city))
      navigate('/dashboard/weather')
  
  }


  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Cities Section */}
          <div className="w-full ">
            <h2 className="text-2xl font-bold mb-4">Cities in India</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center space-x-2 cursor-pointer" onClick={() => citiessearchweather(city)}>
                  <span
                    style={{
                      backgroundColor: getRandomColor(),
                      borderRadius: '50%',
                      width: '10px',
                      height: '10px',
                      // display: 'inline-block'
                    }}
                  />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} AirAware . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
