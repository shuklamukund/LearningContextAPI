import { useEffect } from "react";
import  axios  from "axios";
import {useDispatch,useSelector} from "react-redux";
import { updateChartData } from "../redux/slice/chartSlice";
import "./ChartComponent.css"
import image from "../assets/Image/profile-user.png";


const ChartComponent=()=>{

  const dispatch=useDispatch();
  const chartData=useSelector((state)=>state ?. chart ?. data );
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
      console.log("response",response ?.data ?.data );
      await dispatch(updateChartData(response ?. data ?. data));
    } catch (error) {
      console.error("Error while fetching", error);
    }
  };



useEffect(()=>{
    //fetching data
    fetchData(); 
},[])
 


  return(

    <div>
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