import Container from "./Container";
import Section from "./Section";
import Typography from "./Typography";

const Quote = ({ children, author }) => (
	<Section>
		<blockquote className="border-t-4 border-b-4 border-black border-double border-opacity-10">
			<Container>
				<div className="max-w-screen-sm mx-auto">
					<Typography variant="h4" className="py-10 text-center" script>
						{children}
					</Typography>

					{author && (
						<Typography variant="p" className="pb-5 text-center">
							<strong>- {author}</strong>
						</Typography>
					)}
				</div>
			</Container>
		</blockquote>
	</Section>
);

export default Quote;
