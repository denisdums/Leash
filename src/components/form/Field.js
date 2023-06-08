import {TextInput, View, Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import {fieldStyles} from "../../../assets/styles/styles";
import DatePicker from "react-native-datepicker";
import GalleryField from "./GalleryField";

export default function Field({placeholder, label, onChange, value,type, error, errorText}) {
    function renderField(type) {
        /***
         * Returns field component depending on type
         */
        switch (type) {
            case 'date':
                return <DatePicker mode="date"
                                   date={value}
                                   placeholder={placeholder}
                                   style={fieldStyles.datePicker.wrapper}
                                   format="DD/MM/YYYY"
                                   minDate="01-01-2000"
                                   maxDate={new Date()}
                                   confirmBtnText="Confirmer"
                                   cancelBtnText="Annuler"
                                   onDateChange={onChange}
                                   customStyles={{...fieldStyles.datePicker.field}}
                                   useNativeDriver={true}
                />
            case 'textarea':
                return <TextInput style={fieldStyles.textarea}
                                  multiline={true}
                                  numberOfLines={4}
                                  value={value}
                                  onChangeText={onChange}
                                  placeholder={placeholder ?? null}/>
            case 'gallery':
                return <GalleryField onChange={onChange} value={value}/>
            case 'image':
                return <GalleryField onChange={onChange} value={value} max={1}/>
            case 'password':
                return <TextInput style={fieldStyles.input}
                                  value={value}
                                  secureTextEntry={true}
                                  onChangeText={onChange}
                                  placeholder={placeholder ?? ''}/>
            default:
                return <TextInput style={fieldStyles.input}
                               value={value}
                               onChangeText={onChange}
                               placeholder={placeholder ?? ''}/>
        }
    }

    return (
        <View style={fieldStyles.field}>
            {label ? <Text style={fieldStyles.label}>{label}</Text> : null}
            {renderField(type)}
            {error ? <Text style={fieldStyles.errorLabel}>{errorText}</Text> : null}
        </View>
    )
}