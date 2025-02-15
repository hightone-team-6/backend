import { Injectable } from "@nestjs/common";
import { Location } from "./location.interface";
import { DatabaseService } from "src/utils/database.service";
@Injectable()
export class LocationService {
    constructor(private readonly databaseService: DatabaseService) {}
    locations: Location[] = [
        {
          imageUrls: Array(4).fill(
          "https://images-ext-1.discordapp.net/external/4LQNWZp7WiNpGEhineCY0GokdNTqxgBZbk00bU0G1rI/https/github.com/user-attachments/assets/cb621f73-7ad5-47d5-ac77-f3bb959eb74e?format=webp&width=1782&height=1276"),
          title: "홍대 mz카페",
          location: "서울특별시 강남구",
          description: "넓은 2층 카페",
          templateId: 1,
          locationId: 1,
          hashTags: ["#카페", "#2층", "#전망"],
        },
        {
          imageUrls: Array(4).fill(
            "https://images-ext-1.discordapp.net/external/ae3cKlejMhwnduvseXcJf_NvsZf41oGow9xWD1fGiR0/https/github.com/user-attachments/assets/9331ec63-1b42-40b4-9043-8465213c46e7?format=webp&width=1272&height=1276"),
          title: "부산 해운대 카페",
          location: "부산광역시 해운대구",
          description: "해운대 근처 전망좋은 카페",
          templateId: 2,
          locationId: 2,
          hashTags: ["#전망좋은", "#해운대", "#부산"],
        },
        {
          imageUrls: Array(4).fill(
            "https://images-ext-1.discordapp.net/external/JNXwFEgGOD1kK9af0agYcfCRmqmLgwoRu37mDimxiWY/https/github.com/user-attachments/assets/5e891d80-1ac6-4580-9a31-f83ef1da2356?format=webp&width=1638&height=1276"),
          title: "제주 감귤카페",
          location: "제주특별자치도 서귀포시",
          description: "제주 필수 관광지",
          templateId: 3,
          locationId: 3,
          hashTags: ["#제주도", "#감귤", "#바닷가"],
        },{
            imageUrls: Array(4).fill(
              "https://images-ext-1.discordapp.net/external/-V6I3LuwLDhNOtVJ2RY41zEr-vBpw2pH2-VXdoIIz5o/https/github.com/user-attachments/assets/5a3ea55d-7625-4e78-ae6e-e408f8069405?format=webp&width=800&height=592"),
            title: "대전 퓨 카페",
            location: "대전광역시 유성구",
            description: "넓은 도심뷰의 카페",
            templateId: 2,
            locationId: 2,
            hashTags: ["#도심뷰", "#2층", "#싼"],
          },
          {
            imageUrls: Array(4).fill(
              "https://images-ext-1.discordapp.net/external/4LQNWZp7WiNpGEhineCY0GokdNTqxgBZbk00bU0G1rI/https/github.com/user-attachments/assets/cb621f73-7ad5-47d5-ac77-f3bb959eb74e?format=webp&width=1782&height=1276"),
            title: "제주 돌하르방 카페",
            location: "제주특별자치도 서귀포시",
            description: "바닷가뷰 1황",
            templateId: 3,
            locationId: 3,
            hashTags: ["#제주도", "#바다", "#여행"],
          }, {
            imageUrls: Array(4).fill(
              "https://images-ext-1.discordapp.net/external/ae3cKlejMhwnduvseXcJf_NvsZf41oGow9xWD1fGiR0/https/github.com/user-attachments/assets/9331ec63-1b42-40b4-9043-8465213c46e7?format=webp&width=1272&height=1276"),
            title: "홍대 톤앤매너 카페",
            location: "서울특별시 강남구",
            description: "넓은 2층 카페",
            templateId: 1,
            locationId: 1,
            hashTags: ["#카페", "#2층", "#전망"],
          },
          {
            imageUrls: Array(4).fill(
              "https://images-ext-1.discordapp.net/external/JNXwFEgGOD1kK9af0agYcfCRmqmLgwoRu37mDimxiWY/https/github.com/user-attachments/assets/5e891d80-1ac6-4580-9a31-f83ef1da2356?format=webp&width=1638&height=1276"),
            title: "부산 해운대 카페",
            location: "부산광역시 해운대구",
            description: "해운대 근처 전망좋은 카페",
            templateId: 2,
            locationId: 2,
            hashTags: ["#전망좋은", "#해운대", "#부산"],
          },
          {
            imageUrls: Array(4).fill(
              "https://images-ext-1.discordapp.net/external/-V6I3LuwLDhNOtVJ2RY41zEr-vBpw2pH2-VXdoIIz5o/https/github.com/user-attachments/assets/5a3ea55d-7625-4e78-ae6e-e408f8069405?format=webp&width=800&height=592"),
            title: "제주 감귤카페",
            location: "제주특별자치도 서귀포시",
            description: "제주 필수 관광지",
            templateId: 3,
            locationId: 3,
            hashTags: ["#제주도", "#감귤", "#바닷가"],
          }
    ]
    
    getLocations() {
        return this.locations;
    }
}