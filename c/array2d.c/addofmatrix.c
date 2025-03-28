#include<stdio.h>
int main(){
  int r; 
  printf(" Enter number of rows : ");
  scanf("%d",&r);
  int c; 
  printf(" Enter number of columns : ");
  scanf("%d",&c);
  int arr[r][c];
  int brr[r][c];
  printf("\nenter first matrix");

      for(int i=0;i<r; i++){
        for(int j=0;j<c;j++){
            scanf("%d",&arr[i][j]);
        }
    }
    printf("\n");
    
       for(int i=0;i<r; i++){
        for(int j=0;j<c;j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
     }
              
         printf("\nenter second matrix");
         for(int i=0;i<r; i++){
        for(int j=0;j<c;j++){
            scanf("%d",&brr[i][j]);
        }
    }
    printf("\n");
       for(int i=0;i<r; i++){
        for(int j=0;j<c;j++){
            printf("%d ",brr[i][j]);
        }
         printf("\n");
     }
     printf("sum of two matrix");
       printf("\n");
    int crr[r][c];
    for( int i=0; i<r;i++){
        for( int j=0;j<c;j++){
            crr[i][j] = arr[i][j] + brr[i][j];
              printf("%d ",crr[i][j]);
        }
        printf("\n");
    }
    return 0;
}