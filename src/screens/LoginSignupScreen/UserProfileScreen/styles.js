import { StyleSheet} from 'react-native'
import { Color } from '../../../globals/GlobalStyles'


export const styles = StyleSheet.create({
    containerout: {
        flex: 1,
        backgroundColor: Color.white,
        // alignItems: 'center',
        width: '100%',
    },
    container: {
        // flex: 1,
        backgroundColor: Color.white,
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },
    containerin: {
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Color.red,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    head1: {
        fontSize: 40,
        fontWeight: '200',
        marginVertical: 20,
        color: Color.grey,
    },
    
    head2: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 20,

    },
    head2in: {
        fontSize: 20,
        fontWeight: '300',
    },
    inputout: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        backgroundColor: Color.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // alignSelf: 'center',
        elevation: 20,
    },
    btntxt: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        padding: 10
    },
    input: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: Color.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20,
    }

})