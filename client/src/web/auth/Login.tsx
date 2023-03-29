import { Box, TextField, Button, Grid } from "@mui/material";
import "./Login.css";
function Login() {
	return (
		<>
			<Box
				style={{ marginTop: "10rem" }}
				id="box"
				component="form"
				sx={{
					m: "auto",
					px: 3,
					py: 5,
					"& > :not(style)": { m: 2 },
					width: "fit-content",
					border: 1,
					borderRadius: "15px",
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<div style={{ textAlign: "center" }}>達運光電人臉辨識系統</div>
				</div>
				<div>
					<TextField placeholder="Account" size="small"></TextField>
				</div>
				<div>
					<TextField
						placeholder="Password"
						type="password"
						size="small"
					></TextField>
				</div>
				<div>
					<Button variant="contained" fullWidth>
						Login
					</Button>
				</div>
			</Box>
		</>
	);
}

export default Login;
