import { StyleSheet} from 'react-native'
import { Color } from '../../globals/GlobalStyles'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    head1: {
        fontSize: 30,
        fontWeight: '200',
        color: Color.red,
        margin: 10,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    rowout: {
        flexDirection: 'column',
        margin: 10,
        elevation: 10,
        backgroundColor: Color.white,
        padding: 10,
        borderRadius: 10,
    },

    qty: {
        width: 40,
        height: 30,
        backgroundColor: Color.red,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 10,
        color: Color.white,
        fontSize: 17,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
    },
    price1: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
        color: Color.red,
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        flexDirection: 'row',
    },
    totalprice: {
        fontSize: 17,
        fontWeight: 'bold',
        borderColor: Color.red,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    btntext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.white,
        margin: 10,
    }
})