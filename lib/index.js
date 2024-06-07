import { spawn } from "node:child_process";

export const mime = async (path) => {
	try {
		return (await get_stdout("file", [ "-N", "-b", "--mime-type", path ])).trim();
	} catch (err) {
		return null;
	}
};

async function get_stdout(cmd, args) {
	return new Promise((resolve, reject) => {
		const proc = spawn(cmd, args);

		let stdout = "";

		proc.stdout.on("data", (data) => {
			stdout += data;
		});

		proc.on("exit", (code) => {
			if (code != 0) return reject();

			resolve(stdout);
		});
	});
}
