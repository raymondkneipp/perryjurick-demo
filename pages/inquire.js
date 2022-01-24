import Image from "next/image";
import Section from "../components/Section";
import Container from "../components/Container";
import Typography from "../components/Typography";
import Layout from "../components/Layout";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/form/Button";

const Inquire = () => {
	return (
		<Layout>
			<Section>
				<Container>
					<div className="flex gap-5 items-center flex-col mb-5">
						<Typography variant="h1">Inquire</Typography>
						<Typography variant="h6">
							Feel free to email directly at perry@perryjurick.com
						</Typography>
					</div>
					<div className="grid md:grid-cols-2 gap-36">
						<form className="space-y-5">
							<Input name="name" label="Full Name" />
							<Input name="email" type="email" label="Email" />
							<Input name="phone" type="tel" label="Phone Number" />
							<Input
								name="date"
								type="date"
								label="Wedding / Event Date"
								msg="(mm/dd/yyyy)"
							/>
							<Input name="text" type="text" label="Event Location" />
							<Textarea name="msg" type="text" label="Message" />
							<Button>Submit</Button>
						</form>
						<div className="space-y-5 flex items-center flex-col">
							<div className="grid grid-cols-3 gap-5 w-full">
								<Image
									src="/images/Port007.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/Port052.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/Port116.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/Port016.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/Port089.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port037.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port012.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port034.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port030.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port012.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port034.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
								<Image
									src="/images/hero/port030.jpg"
									layout="responsive"
									width="200px"
									height="200px"
									objectFit="cover"
								/>
							</div>

							<Typography variant="h6">
								Join us on Instagram where we share our artistry
							</Typography>
							<Typography variant="h6">@PERRYJURICK</Typography>
						</div>
					</div>
				</Container>
			</Section>
			<Section>
				<Container>
					<div className="max-w-screen-sm mx-auto space-y-5">
						<Typography variant="h1" className="text-center">
							Inquire
						</Typography>
						<Typography variant="h6" className="text-center">
							Feel free to email directly at perry@perryjurick.com
						</Typography>
						<form className="space-y-5">
							<Input name="name" label="Full Name" />
							<Input name="email" type="email" label="Email" />
							<Input name="phone" type="tel" label="Phone Number" />
							<Input
								name="date"
								type="date"
								label="Wedding / Event Date"
								msg="(mm/dd/yyyy)"
							/>
							<Input name="text" type="text" label="Event Location" />
							<Textarea name="msg" type="text" label="Message" />
							<Button>Submit</Button>
						</form>
					</div>
				</Container>
			</Section>
		</Layout>
	);
};

export default Inquire;
