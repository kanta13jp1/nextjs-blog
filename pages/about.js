function About() {
    return <div>About Test</div>
}

export async function getStaticProps(context) {
    return {
        redirect: {
            destination: '/',
            permanent: true, // triggers 308
        },
    };
}

export default About