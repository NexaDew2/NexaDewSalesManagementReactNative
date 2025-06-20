import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const [company, setCompany] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = () => {
    if (!company || !fullName || !phone || !email || !password || !confirm) {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      Alert.alert('Registration Successful');
      router.replace('/Login');
    }
  };

  const handleGoogleSignUp = () => {
    Alert.alert('Google Sign Up clicked');
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.formBox}>
          {/* <Text style={styles.title}>Company Owner Register</Text>

          <Text style={styles.subtitle}>Create your Company Owner account</Text> */}
          <Text style={styles.title}>Company Owner Register</Text>
            <Text style={styles.subtitle}>Create your Company Owner account</Text>
               

            

          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
              }}
              style={styles.googleLogo}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          <Text style={styles.or}>— or register with email —</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Company Name</Text>
            <TextInput
              placeholder="Company Name"
              placeholderTextColor="#9CA3AF"
              value={company}
              onChangeText={setCompany}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#9CA3AF"
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#9CA3AF"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />
          </View>

          {/* <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#9CA3AF"
              value={confirm}
              onChangeText={setConfirm}
              style={styles.input}
              secureTextEntry
            />
          </View> */}

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('/Login')}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formBox: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111827',
  },
  subtitle: {
  fontSize: 16,
  color: '#6b7280', // gray-500
  textAlign: 'center',
  marginBottom: 16,
},

  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  googleText: {
    fontSize: 16,
    color: '#333',
  },
  or: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    color: '#2563eb',
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
    color: '#374151',
    fontWeight: '500',
  },
});
