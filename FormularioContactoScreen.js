import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const FormularioContactoScreen = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un email válido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{10,}$/.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Por favor ingrese un número de teléfono válido (mínimo 10 dígitos)';
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Aquí normalmente enviarías los datos a un servidor
      console.log('Datos del formulario:', formData);
      
      Alert.alert(
        '¡Éxito!',
        'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        [
          {
            text: 'OK',
            onPress: () => {
              // Limpiar formulario
              setFormData({
                nombre: '',
                email: '',
                telefono: '',
                asunto: '',
                mensaje: '',
              });
              setErrors({});
            }
          }
        ]
      );
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Formulario de Contacto</Text>
        <Text style={styles.subtitle}>Nos encantaría escucharte</Text>

        <View style={styles.formContainer}>
          {/* Campo Nombre */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre completo *</Text>
            <TextInput
              style={[styles.input, errors.nombre && styles.inputError]}
              placeholder="Ingresa tu nombre completo"
              value={formData.nombre}
              onChangeText={(text) => handleInputChange('nombre', text)}
              autoCapitalize="words"
            />
            {errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}
          </View>

          {/* Campo Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo electrónico *</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          {/* Campo Teléfono */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Teléfono *</Text>
            <TextInput
              style={[styles.input, errors.telefono && styles.inputError]}
              placeholder="+1 (555) 123-4567"
              value={formData.telefono}
              onChangeText={(text) => handleInputChange('telefono', text)}
              keyboardType="phone-pad"
            />
            {errors.telefono && <Text style={styles.errorText}>{errors.telefono}</Text>}
          </View>

          {/* Campo Asunto */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Asunto *</Text>
            <TextInput
              style={[styles.input, errors.asunto && styles.inputError]}
              placeholder="¿Sobre qué quieres hablar?"
              value={formData.asunto}
              onChangeText={(text) => handleInputChange('asunto', text)}
            />
            {errors.asunto && <Text style={styles.errorText}>{errors.asunto}</Text>}
          </View>

          {/* Campo Mensaje */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mensaje *</Text>
            <TextInput
              style={[styles.textArea, errors.mensaje && styles.inputError]}
              placeholder="Cuéntanos en detalle cómo podemos ayudarte..."
              value={formData.mensaje}
              onChangeText={(text) => handleInputChange('mensaje', text)}
              multiline
              numberOfLines={4}
              maxLength={500}
            />
            <Text style={styles.charCount}>{formData.mensaje.length}/500</Text>
            {errors.mensaje && <Text style={styles.errorText}>{errors.mensaje}</Text>}
          </View>

          {/* Botón Enviar */}
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
          </TouchableOpacity>

          {/* Información de contacto */}
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>También puedes contactarnos por:</Text>
            <Text style={styles.contactText}>📧 contacto@empresa.com</Text>
            <Text style={styles.contactText}>📞 +1 (555) 123-4567</Text>
            <Text style={styles.contactText}>📍 Calle Principal 123, Ciudad</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#ff3b30',
    backgroundColor: '#fff5f5',
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 12,
    marginTop: 5,
  },
  charCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 10,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactInfo: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default FormularioContactoScreen;
