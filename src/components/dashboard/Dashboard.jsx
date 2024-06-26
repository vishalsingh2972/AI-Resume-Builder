import AddResume from "./AddResume"

const Dashboard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Explore AI Resume Builder, Create an awesome Resume with AI 🤖</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        <AddResume/>
      </div>
    </div>
  )
}

export default Dashboard