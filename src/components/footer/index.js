import { Container, Inner, Text, Logo, Left, Right, Anchor, Icon } from './styles'

export default function Footer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Footer.Logo = function FooterLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
}

Footer.Left = function FooterLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>
}

Footer.Right = function FooterRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>
}

Footer.Social = function FooterSocial({ iconClass, href, ...restProps }) {
    return (
        <Anchor href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
            <Icon className={iconClass}></Icon>
        </Anchor>
    )
}