"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';
import handleLogout from '@/app/utils/handleLogout';


export default function EditUser() {
	const router = useRouter();
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const [redirect, setRedirect] = useState(false);

	// TODO - Add state for email, number, streetAddress, city
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [number, setNumber] = useState('');
	const [streetAddress, setStreetAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipCode, setZipCode] = useState('');

	const expirationTime = new Date(parseInt(localStorage.getItem('expiration')) * 1000);
    let currentTime = Date.now();

    // make a condition that compares exp and current time
    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login to continue.');
        router.push('/users/login');
    }

	// create the 
	const handleFirstName = (e) => {
		// fill in code
		setFirstName(e.target.value);
	};

	const handleLastName = (e) => {
		// fill in code
		setLastName(e.target.value);
	};

	const handleEmail = (e) => {
		// fill in code
		setEmail(e.target.value);
	};

	const handleJobTitle = (e) => {
		// fill in code
		setJobTitle(e.target.value);
	};

	const handleNumber = (e) => {
		// fill in code
		setNumber(e.target.value);
	};

	const handleStreetAddress = (e) => {
		// fill in code
		setStreetAddress(e.target.value);
	};

	const handleCity = (e) => {
		// fill in code
		setCity(e.target.value);
	};

	const handleState = (e) => {
		// fill in code
		setState(e.target.value);
	};

	const handleZipCode = (e) => {
		// fill in code
		setZipCode(e.target.value);
	};

	const handleSubmit = (e) => {
		// fill in code
		e.preventDefault();
		// if the email is different, update that in localStorage
		// use axios to put to the route
		// create an object that stores that updated changes
		const updateUserObject = {
			firstName,
			lastName,
			email,
			number,
			jobTitle,
			streetAddress,
			city,
			state,
			zipCode
		};
		axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${data._id}`, updateUserObject)
			.then(response => {
				// update email in localStorage
				localStorage.setItem('email', email);
				setRedirect(true);
			})
			.catch(error => {
				console.log(error);
				router.push('/users/profile');
			});

	};

	useEffect(() => {
		if (localStorage.getItem('jwtToken')) {
			fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/email/${localStorage.getItem('email')}`)
				.then((res) => res.json())
				.then((data) => {
					// data is an object
					let userData = jwtDecode(localStorage.getItem('jwtToken'));

					if (data.user[0].email === userData.email) {
						setData(data.user[0]);
						setFirstName(data.user[0].firstName);
						setLastName(data.user[0].lastName);
						setEmail(data.user[0].email);
						setJobTitle(data.user[0].jobTitle);
						setNumber(data.user[0].number);
						setStreetAddress(data.user[0].address.streetAddress);
						setCity(data.user[0].address.city);
						setState(data.user[0].address.state);
						setZipCode(data.user[0].address.zipCode);
						setLoading(false);
					}
				})
				.catch((error) => {
					console.log(error);
					router.push('/users/login');
				});
		} else {
			router.push('/users/login');
		}
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No data shown...</p>;
	if (redirect) { router.push('/users/profile'); }


	return (
		<div className="container">
			<div className="main-body">
				<nav aria-label="breadcrumb" className="main-breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="/">Home</a></li>
						<li className="breadcrumb-item"><a href="/users/profile">Profile</a></li>
						<li className="breadcrumb-item" onClick={handleLogout}><a href="">Logout</a></li>
					</ol>
				</nav>
				<div className="row">
					<div className="col-lg-4">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
									<div className="mt-3">
										{/* TODO - Update with state name, job title, city, state */}
										<h4>{data.firstName} {data.lastName}</h4>
										<p className="text-secondary mb-1">{data.jobTitle}</p>
										<p className="text-muted font-size-sm">{data.address.city}, {data.address.state}</p>
										<button className="btn btn-primary">Follow</button>
										<button className="btn btn-outline-primary">Message</button>
									</div>
								</div>
								<hr className="my-4" />
								<ul className="list-group list-group-flush">
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
										<span className="text-secondary">https://bootdey.com</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
										<span className="text-secondary">bootdey</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
										<span className="text-secondary">@bootdey</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
										<span className="text-secondary">bootdey</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
										<span className="text-secondary">bootdey</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="card">
							{/* TODO - Update value for all user values */}
							<form className="card-body" onSubmit={handleSubmit}>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">First Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={firstName} onChange={handleFirstName} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">Last Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={lastName} onChange={handleLastName} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={email} onChange={handleEmail} required />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">Job Title</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={jobTitle} onChange={handleJobTitle} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">Phone</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={number} onChange={handleNumber} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">Mobile</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={number} onChange={handleNumber} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">Street Address</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={streetAddress} onChange={handleStreetAddress} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">City</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={city} onChange={handleCity} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">State</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={state} onChange={handleState} />
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-sm-3">
										<h6 className="mb-0">ZipCode</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										<input type="text" className="form-control" value={zipCode} onChange={handleZipCode} />
									</div>
								</div>
								<div className="row">
									<div className="col-sm-3"></div>
									<div className="col-sm-9 text-secondary">
										<button className="btn btn-primary px-4" type='Submit'>Save Changes</button>
									</div>
								</div>
							</form>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="card">
									<div className="card-body">
										<h5 className="d-flex align-items-center mb-3">Project Status</h5>
										<p>Web Design</p>
										<div className="progress mb-3" style={{ height: '5px' }}>
											<div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<p>Website Markup</p>
										<div className="progress mb-3" style={{ height: '5px' }}>
											<div className="progress-bar bg-danger" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<p>One Page</p>
										<div className="progress mb-3" style={{ height: '5px' }}>
											<div className="progress-bar bg-success" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<p>Mobile Template</p>
										<div className="progress mb-3" style={{ height: '5px' }}>
											<div className="progress-bar bg-warning" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<p>Backend API</p>
										<div className="progress" style={{ height: '5px' }}>
											<div className="progress-bar bg-info" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}