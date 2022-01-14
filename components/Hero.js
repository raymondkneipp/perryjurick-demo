import Fade from "./Fade";
import Section from "./Section";
import Container from "./Container";
import Typography from "./Typography";

const Hero = () => (
	<>
		<Section>
			<Container>
				<div className="grid grid-cols-1 auto-cols-auto md:grid-cols-2 gap-y-14 gap-x-24">
					<div className="flex flex-col items-center justify-center space-y-5 md:items-end">
						<Typography variant="h1" className="text-center md:text-right">
							Perry Jurick{" "}
							<small className="block mt-3 text-black text-opacity-50">
								Photography
							</small>
						</Typography>

						<Typography variant="h5" script>
							Pure, Emotive Artistry
						</Typography>

						<Typography variant="button" href="/inquire">
							Inquire Today
						</Typography>
					</div>
					<Fade />
				</div>
			</Container>
		</Section>
	</>
);

export default Hero;
