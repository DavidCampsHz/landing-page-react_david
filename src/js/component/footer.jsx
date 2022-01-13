import React from "react";
import { footer } from "react-bootstrap";

const FooteR = () => {
	return (
		<>
			<footer className="page-footer font-small blue pt-4">
				<div className="container-fluid text-center">
					<div className="row">
						<div>
							<h5 className="text-uppercase">Footer</h5>
						</div>

						<hr className="clearfix w-100 d-md-none pb-0" />
					</div>
				</div>
				<div className="footer-copyright text-center py-3">
					© 2022 Copyright:
					<a href="https://github.com/ertip4geek?tab=repositories">
						{" "}
						Made it for you by @ertip4Geeks + DavidCmP
					</a>
				</div>
			</footer>
		</>
	);
};

export default FooteR;
