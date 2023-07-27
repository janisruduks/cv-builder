import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    section: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
    },
    nameText: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Courier-Bold',
    },
    heading: {
        color: 'blue',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    content: {
        color: 'black',
        fontSize: 12,
        marginBottom: 10,
    },
});

export const PageCV = ({ name, email, phone }: any) => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.heading}>Contact Information</Text>
                    <Text style={styles.content}>Email: {email}</Text>
                    <Text style={styles.content}>Phone {phone}</Text>
                    <Text style={styles.heading}>Education</Text>
                    <Text style={styles.content}>B.Sc. Computer Science, XYZ University, 2010</Text>
                    <Text style={styles.content}>M.Sc. Software Engineering, ABC University, 2012</Text>
                    <Text style={styles.heading}>Work Experience</Text>
                    <Text style={styles.content}>
                        Senior Software Engineer, Company A, 2012 - Present
                    </Text>
                    <Text style={styles.content}>
                        Software Engineer, Company B, 2010 - 2012
                    </Text>
                </View>
            </Page>
        </Document>
    );
};
