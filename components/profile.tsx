import Image from "next/image";


const Profile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-8 sm:space-y-0">
                <Image src={'/rja-profile-photo.jpg'} width={100} height={100}
                    className="rounded-full object-cover border-2" />
                <div>
                    <h1 className="text-2xl">Rich Joshua Alzate</h1>
                    <h3 className="text-xl">Full-Stack Software Engineer</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile;