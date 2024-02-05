import { useEffect } from "react";
import  axios  from "axios";
import {useDispatch,useSelector} from "react-redux";
import {updateChartData} from "../redux/slice/chartSlice";
import "./ChartComponent.css"
import image from "../assets/Image/profile-user.png";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const ChartComponent=()=>{

  const dispatch=useDispatch();
  const chartData=useSelector((state)=>state ?. chart ?. data );
  
  const ageData=[];
  chartData.map((data)=>{ageData.push(data.employee_age)});
  console.log(ageData);

  const ageData18=ageData.filter((data)=>data<=30);
  const ageData30=ageData.filter((data)=>data<=45);
  const ageData70=ageData.filter((data)=>data<=70)

  const age={
    ageLessThan18:ageData18.length,
    ageLessThan45:ageData30.length-ageData18.length,
    ageLessThan70:ageData70.length-ageData30.length,

  };
  console.log("Age is>>",age);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
      console.log("response",response ?.data ?.data );
      await dispatch(updateChartData(response ?. data ?. data));
    } catch (error) {
      console.error("Error while fetching", error);
    }
  };


  const AgeData = {
    labels: ["Age between 18-30", "Age between 31-45","Age between 46-70"],
    datasets: [
      {
        label: "Age Details",
        data: [age.ageLessThan18,age.ageLessThan45,age.ageLessThan70],
        backgroundColor: ["yellow", "green","red"],
        borderColor: ["yellow", "green","red"],
        borderWidth: 1,
      },
    ],
  };



useEffect(()=>{
    //fetching data
    fetchData(); 
},[])
 


  return(

  <div>
    <div >
  {/* for displaying the pie chart */}
  <div >
    <Pie data={AgeData} />
  </div>


  
</div>

      <table >
            <thead>
              <tr>
                <th>Id</th>
                <th>Employees Name</th>
                <th>Employees Age</th>
                <th>Employees Salary</th>
                <th>Profile photo</th>
          
              </tr>
            </thead>

            <tbody>
              {chartData?.map((data) => {
                return (
                  <tr key={data?.id}>
                    <td>{data.id}</td>
                    <td>
                    {data ?.employee_name}
                    </td>
                    <td>{data?.employee_age}</td>
                    <td>{data?.employee_salary}</td>
                    <td>
                      <img src={data ?.profile_image} alt={image}/>
                    </td>
                  

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

  
  );

}
export default ChartComponent;