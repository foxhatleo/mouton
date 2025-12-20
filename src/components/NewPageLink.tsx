import type React from "react";
import { Link } from "@/i18n/routing";

const NewPageLink: React.ComponentType<React.ComponentProps<typeof Link>> = (
	p,
) => <Link target="_blank" rel="noopener noreferrer" {...p} />;

export default NewPageLink;
