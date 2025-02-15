import { Injectable } from "@nestjs/common";
import { Location } from "./location.interface";
@Injectable()
export class LocationService {
    locations: Location[] = [
        {
          imageUrls: Array(4).fill(
            "https://i.namu.wiki/i/5FGUIiyTGl3EkaSlnnRnmoAsPBMkL8w1tVdj5pgDOoydk2T0brSqYsWyLgGqyELwn5oP8HWRhF8A-p8ZyN4FtQ.webp"
          ),
          title: "서울 카페",
          location: "서울특별시 강남구",
          description: "분위기 좋은 카페",
          templateId: 1,
          locationId: 1,
          hashTags: ["#카페", "#데이트", "#분위기좋은"],
        },
        {
          imageUrls: Array(4).fill(
            "https://i.namu.wiki/i/5FGUIiyTGl3EkaSlnnRnmoAsPBMkL8w1tVdj5pgDOoydk2T0brSqYsWyLgGqyELwn5oP8HWRhF8A-p8ZyN4FtQ.webp"
          ),
          title: "부산 맛집",
          location: "부산광역시 해운대구",
          description: "해운대 근처 맛집",
          templateId: 2,
          locationId: 2,
          hashTags: ["#맛집", "#해운대", "#부산여행"],
        },
        {
          imageUrls: Array(4).fill(
            "https://i.namu.wiki/i/5FGUIiyTGl3EkaSlnnRnmoAsPBMkL8w1tVdj5pgDOoydk2T0brSqYsWyLgGqyELwn5oP8HWRhF8A-p8ZyN4FtQ.webp"
          ),
          title: "제주도 명소",
          location: "제주특별자치도 서귀포시",
          description: "제주 필수 관광지",
          templateId: 3,
          locationId: 3,
          hashTags: ["#제주도", "#관광", "#여행"],
        },
    ]
    
    getLocations() {
      return this.locations;
    }
}