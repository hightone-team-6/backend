import { Injectable } from "@nestjs/common";
import { Location } from "./location.interface";
import { DatabaseService } from "src/utils/database.service";
@Injectable()
export class LocationService {
    constructor(private readonly databaseService: DatabaseService) {}
    locations: Location[] = [
        {
          imageUrls: Array(4).fill(
            "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575328-cb621f73-7ad5-47d5-ac77-f3bb959eb74e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T220326Z&X-Amz-Expires=300&X-Amz-Signature=c1dcb0c2fcb52735ac817348382080aa50f39af97ba6aaa985389857b925b664&X-Amz-SignedHeaders=host"
          ),
          title: "홍대 톤앤매너 카페",
          location: "서울특별시 강남구",
          description: "넓은 2층 카페",
          templateId: 1,
          locationId: 1,
          hashTags: ["#카페", "#2층", "#전망"],
        },
        {
          imageUrls: Array(4).fill(
            "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575262-5e891d80-1ac6-4580-9a31-f83ef1da2356.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T215209Z&X-Amz-Expires=300&X-Amz-Signature=f98dbad6de499c0fb401654a839229e2f7596f30c2961ca1013e7fd55df77a0f&X-Amz-SignedHeaders=host"
          ),
          title: "부산 해운대 카페",
          location: "부산광역시 해운대구",
          description: "해운대 근처 전망좋은 카페",
          templateId: 2,
          locationId: 2,
          hashTags: ["#전망좋은", "#해운대", "#부산"],
        },
        {
          imageUrls: Array(4).fill(
            "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575356-9331ec63-1b42-40b4-9043-8465213c46e7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T220420Z&X-Amz-Expires=300&X-Amz-Signature=545da8c46122cff77f0dc15fb25bef5015b0c1bf8a5d261e6f4b2463db69066c&X-Amz-SignedHeaders=host"
          ),
          title: "제주 감귤카페",
          location: "제주특별자치도 서귀포시",
          description: "제주 필수 관광지",
          templateId: 3,
          locationId: 3,
          hashTags: ["#제주도", "#감귤", "#바닷가"],
        },{
            imageUrls: Array(4).fill(
              "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575262-5e891d80-1ac6-4580-9a31-f83ef1da2356.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T220454Z&X-Amz-Expires=300&X-Amz-Signature=cc963e93c337d1e560356c3db866bda0db63e20c792a0bb26032599e5403a9dd&X-Amz-SignedHeaders=host"
            ),
            title: "대전 퓨 카페",
            location: "대전광역시 유성구",
            description: "넓은 도심뷰의 카페",
            templateId: 2,
            locationId: 2,
            hashTags: ["#도심뷰", "#2층", "#싼"],
          },
          {
            imageUrls: Array(4).fill(
              "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575378-5a3ea55d-7625-4e78-ae6e-e408f8069405.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T220522Z&X-Amz-Expires=300&X-Amz-Signature=0b826016328e3f32b9987613e21e9a4323a99a7dc4df152b213be477bcfaac21&X-Amz-SignedHeaders=host"
            ),
            title: "제주 돌하르방 카페",
            location: "제주특별자치도 서귀포시",
            description: "바닷가뷰 1황",
            templateId: 3,
            locationId: 3,
            hashTags: ["#제주도", "#바다", "#여행"],
          }, {
            imageUrls: Array(4).fill(
              "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575328-cb621f73-7ad5-47d5-ac77-f3bb959eb74e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T220326Z&X-Amz-Expires=300&X-Amz-Signature=c1dcb0c2fcb52735ac817348382080aa50f39af97ba6aaa985389857b925b664&X-Amz-SignedHeaders=host"
            ),
            title: "홍대 톤앤매너 카페",
            location: "서울특별시 강남구",
            description: "넓은 2층 카페",
            templateId: 1,
            locationId: 1,
            hashTags: ["#카페", "#2층", "#전망"],
          },
          {
            imageUrls: Array(4).fill(
              "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575262-5e891d80-1ac6-4580-9a31-f83ef1da2356.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T215209Z&X-Amz-Expires=300&X-Amz-Signature=f98dbad6de499c0fb401654a839229e2f7596f30c2961ca1013e7fd55df77a0f&X-Amz-SignedHeaders=host"
            ),
            title: "부산 해운대 카페",
            location: "부산광역시 해운대구",
            description: "해운대 근처 전망좋은 카페",
            templateId: 2,
            locationId: 2,
            hashTags: ["#전망좋은", "#해운대", "#부산"],
          },
          {
            imageUrls: Array(4).fill(
              "https://github-production-user-asset-6210df.s3.amazonaws.com/106712562/413575356-9331ec63-1b42-40b4-9043-8465213c46e7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250215%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T220420Z&X-Amz-Expires=300&X-Amz-Signature=545da8c46122cff77f0dc15fb25bef5015b0c1bf8a5d261e6f4b2463db69066c&X-Amz-SignedHeaders=host"
            ),
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