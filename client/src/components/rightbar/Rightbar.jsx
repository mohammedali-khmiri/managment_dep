import "./rightbar.css";
import { Users } from "../../dummyData";
import { useSelector } from "react-redux";
import { Publish } from "@material-ui/icons";

export default function Rightbar() {
	const userS = useSelector((state) => state.student.currentUser);
	const userT = useSelector((state) => state.teacher.currentUser);
	if (userS) {
		var currUser = userS;
	} else {
		var currUser = userT;
	}
	const HomeRightbar = () => {
		return (
			<>
				<div className="newProduct">
					<h1 className="addProductTitle">New advertisement</h1>
					<form className="addProductForm">
						<div className="addProductItem">
							<label>Image</label>
							<label for="file">
								{/* <Publish  style={{ cursor: "pointer", fontSize: 40 }} /> */}
							</label>
							<input
								type="file"
								id="file"
								// onChange={(e) => setFile(e.target.files[0])}
							/>
						</div>
						<div className="addProductItem">
							<label>Nom</label>
							<input
								name="title"
								type="text"
								placeholder="Title."
								// onChange={handleChange}
							/>
							<div className="addProductItem">
								<label>Description</label>
								<textarea
									name="desc"
									rows="5"
									cols="33"
									placeholder="description"
								></textarea>
							</div>
						</div>

						<button className="addProductButton">Create</button>
					</form>
				</div>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<div className="productBottom">
					<form className="productForm">
						<div className="productFormLeft">
							<div className="productUpload">
								<img src={currUser.img} alt="" className="productUploadImg" />
								<label for="file">
									<Publish style={{ cursor: "pointer" }} />
								</label>
								<input
									type="file"
									id="file"
									style={{ display: "none" }}
									// onChange={(e) => setFile(e.target.files[0])}
								/>
							</div>
							<input
								name="id"
								type="text"
								// onChange={handleChange}
								value={currUser._id}
								hidden
							/>
							<label>Nom </label>
							<input
								name="firstName"
								type="text"
								placeholder={currUser.firstName}
								// onChange={handleChange}
							/>
							<label>Prenom </label>
							<input
								name="lastName"
								type="text"
								placeholder={currUser.lastName}
								// onChange={handleChange}
							/>
							<label>Email</label>
							<input
								name="email"
								type="text"
								placeholder={currUser.email}
								// onChange={handleChange}
							/>
							<label>Address</label>
							<input
								name="address"
								type="text"
								placeholder={currUser.address}
								// onChange={handleChange}
							/>
							<label>Telephone</label>
							<input
								name="phone"
								type="number"
								placeholder={currUser.phone}
								// onChange={handleChange}
							/>
						</div>
						<div className="productFormRight">
							<button className="productButton">Update</button>
						</div>
					</form>
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{userT && (
					<>
						<ProfileRightbar /> <HomeRightbar />
					</>
				)}
				{userS ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
}
