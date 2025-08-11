import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  // Mock user data - replace with actual user data from your backend/state
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Mobile developer passionate about React Native and creating amazing user experiences.',
    avatar: 'https://via.placeholder.com/150',
    followers: 1234,
    following: 567,
    posts: 89,
    location: 'San Francisco, CA',
    website: 'johndoe.dev',
  };

  const stats = [
    { label: 'Posts', value: user.posts },
    { label: 'Followers', value: user.followers },
    { label: 'Following', value: user.following },
  ];

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log('Navigate to edit profile');
  };

  const handleSettings = () => {
    // Navigate to settings screen
    console.log('Navigate to settings');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSettings}>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
        
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.bio}>{user.bio}</Text>
        
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.infoText}>{user.location}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="link-outline" size={16} color="#666" />
          <Text style={styles.infoText}>{user.website}</Text>
        </View>

        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="grid-outline" size={24} color="#333" />
          <Text style={styles.actionText}>My Posts</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark-outline" size={24} color="#333" />
          <Text style={styles.actionText}>Saved</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color="#333" />
          <Text style={styles.actionText}>Liked</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="people-outline" size={24} color="#333" />
          <Text style={styles.actionText}>Friends</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityPlaceholder}>
          <Text style={styles.placeholderText}>No recent activity</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileSection: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  editButton: {
    backgroundColor: '#1da1f2',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  actionSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  actionButton: {
    width: (width - 60) / 2,
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  activitySection: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activityPlaceholder: {
    alignItems: 'center',
    padding: 40,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
});

export default ProfileScreen;
