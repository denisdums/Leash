import {View, ActivityIndicator, SafeAreaView, StyleSheet} from "react-native";
import {formStyles} from "../../assets/styles/form";
import {colors} from "../../assets/styles/colors";

export default function Loader() {
    return (
        <View style={{...formStyles.wrapper, backgroundColor: colors.purple}}>
            <SafeAreaView style={styles.wrapper}>
                <View>
                    <ActivityIndicator color={'white'}/>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    heading: {
        textAlign: 'center',
        marginBottom: 20,
    }
});