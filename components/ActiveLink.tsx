
import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/router';

const style : React.CSSProperties | undefined = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    href: string;
    children?: React.ReactNode;
    text: string;
}



export const ActiveLink :FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



