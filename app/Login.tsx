import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Please enter email and password');
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Sign In clicked');
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.formBox}>
          <Text style={styles.title}>NexaDew</Text>
          <Text style={styles.subtitle}>Welcome Back</Text>
          <Text style={styles.subtext}>Sign in to your account</Text>

          {/* Google Button */}
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
              }}
              style={styles.googleLogo}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Divider */}
          <Text style={styles.or}>— or continue with email —</Text>

          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
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

          {/* Sign In Button */}
          <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
            <Text style={styles.buttonText}>Sign In with Email</Text>
          </TouchableOpacity>

          {/* Link to Register */}
          <TouchableOpacity onPress={() => router.replace('/Register')}>
            <Text style={styles.link}>Don't have an account? Register as:</Text>
          </TouchableOpacity>
          <TouchableOpacity
  style={[styles.roleButton, { backgroundColor: '#10b981' }]}
//   onPress={() => router.replace('/marketing-manager/register')}
>
  <Text style={styles.roleButtonText}>Marketing Manager</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.roleButton, { backgroundColor: '#3b82f6' }]}
//   onPress={() => router.replace('/sales-manager/register')}
>
  <Text style={styles.roleButtonText}>Sales Manager</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.roleButton, { backgroundColor: '#8b5cf6' }]}
//   onPress={() => router.replace('/company-owner/register')}
>
  <Text style={styles.roleButtonText}>Company Owner</Text>
</TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
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
    color: '#111827',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#374151',
    marginTop: 8,
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6b7280',
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
    marginVertical: 12,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
    color: '#374151',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: '#d1d5db',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#2563eb',
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
    color: '#10b981',
  },
  roleButton: {
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
},
roleButtonText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 14,
},

});
