import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function contact() {
    return(
        <>
            <section className="mt-32 mx-40 text-white " >
                <h1 className="text-5xl font-bold">Reach me out!</h1>
                <div className="my-16 w-1/3">
                    <div className="my-8 flex justify-between">
                        <p className="font-bold">Email</p>
                        <p>hakimnazry@gmail.com</p>
                    </div>
                    <hr />
                    <div className="my-8 flex justify-between">
                        <p className="font-bold">Phone number</p>
                        <p>011-33939962</p>
                    </div>
                    <hr />
                    <div className="my-8 flex justify-between">
                        <p className="font-bold">Social</p>
                        <div className="flex gap-4">
                            <p><a href="https://twitter.com/hakimnazry_"><FaTwitter></FaTwitter></a></p>
                            <p><a href="https://github.com/hakimnazry24"><FaGithub></FaGithub></a></p>
                            <p><a href="https://www.linkedin.com/in/muhammad-hakim-bin-md-nazri-449a37247/"><FaLinkedin></FaLinkedin></a></p>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        </>
    )
}