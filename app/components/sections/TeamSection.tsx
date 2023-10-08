import Image from "next/image"

const TeamSection = () => {
  return <div className="grid place-items-center py-16 px-8">
  <div className="flex flex-col lg:flex-row items-center justify-around gap-12 ">

    <Image
    className="rounded-xl"
    src={'/FamilyColor.jpg'}
    alt='Our Family'
    width={700}
    height={256}/>

    <div>
        <h1 className="text-7xl text-center "><span className="font-bold text-7xl text-blue-500">Together</span>, <br/> we help <br/>  Change Lives</h1>
    </div>
      
  </div>
  </div> 
}

export default TeamSection