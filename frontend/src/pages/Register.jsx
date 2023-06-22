import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    console.log(formData)
    const { name, email, password, password2 } = formData
    function handleForm(e) {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>
                    Create an account
                </p>
            </section>

            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleForm}
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleForm}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleForm}
                            placeholder='Enter Password'
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            onChange={handleForm}
                            placeholder='Confirm password'
                        />
                    </div>




                    <div className="form-control">
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register