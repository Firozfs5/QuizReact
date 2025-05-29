import useCategory from "../../utilities/useCategory";

const Category=()=>{

   let [topic,setTopic,handleSubmitBtn]=useCategory();
    return (
      <form onSubmit={handleSubmitBtn} className="bg-[#123458] w-[850px] h-[500px] rounded-2xl text-white flex flex-col justify-center items-center">
        <label htmlFor="select" className="text-5xl font-bold mb-8">Choose Category</label>
        <select id="select" value={topic} onChange={(e)=> setTopic(e.target.value)} className="bg-white text-black w-60 h-10 rounded-md font-semibold ">
            <option className="font-semibold p-2" value="History">History</option>
            <option className="font-semibold p-2" value="Film">Film</option>
            <option className="font-semibold p-2" value="Sports">Sports</option>
            <option className="font-semibold p-2" value="Animals">Animals</option>
            {/* <option className="font-semibold p-2" value="Vehicles">Vehicles</option> */}
        </select>

    <button type="submit" className="text-2xl font-medium bg-green-500 p-2 rounded-sm mt-6">Proceed</button>

      </form>
    )
}

export default Category;