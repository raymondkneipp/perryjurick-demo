import Typography from "../Typography";

const Input = ({ name, label = "label", type = "text", msg }) => {
	return (
		<div className="flex flex-col">
			<label
				htmlFor={name}
				className="mb-2 font-serif font-normal text-black text-opacity-70"
			>
				{label}
			</label>
			<input
				name={name}
				id={name}
				type={type}
				className="px-4 py-2 font-serif font-normal text-black bg-transparent border-4 border-double border-black border-opacity-10 text-opacity-70 focus:outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-opacity-80 focus-visible:ring-offset-2 rounded-none"
			/>
			{msg ? (
				<Typography variant="small" className="mt-1">
					{msg}
				</Typography>
			) : null}
		</div>
	);
};

export default Input;
