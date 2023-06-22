import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({

        email: "",
        password: "",

    })
    console.log(formData)
    const { email, password } = formData
    function handleForm(e) {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>
                   Login
                </p>
            </section>

            <section className='form'>
                <form onSubmit={handleSubmit}>

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

export default Login