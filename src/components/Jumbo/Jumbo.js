import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { Heading } from "@navikt/ds-react";
import BodyText from "@/common/components/BodyText/BodyText";
import classNames from "classnames";
import Anchor from "@/common/components/Anchor/Anchor";

function Jumbo({ href, children, img, altText, title, linkText, color }) {
    return (
        <div
            className={classNames("jumbo", {
                [`jumbo-${color}`]: color,
            })}
        >
            <div className="jumbo-image-wrapper">
                <Image src={img} alt={altText} className="jumbo-image" />
            </div>
            <div className="jumbo-content">
                <Heading level={2} size="xlarge" className="mb-2">
                    {title}
                </Heading>
                <BodyText className="jumbo-text mb-2">{children}</BodyText>
                <BodyText>
                    <Link href={href} passHref>
                        <Anchor dark className="jumbo-anchor">
                            {linkText}
                        </Anchor>
                    </Link>
                </BodyText>
            </div>
        </div>
    );
}

Jumbo.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default Jumbo;
