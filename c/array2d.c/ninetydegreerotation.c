#include<stdio.h>
int main(){
    int n;
    printf(" Enter the no of rows and columns : ");
    scanf("%d",&n);
    int arr[n][n];
     for(int i=0; i<n; i++){
        for( int j=0; j<n; j++){
            scanf("%d",&arr[i][j]);
        }
     }
      for(int i=0; i<n; i++){
       for( int j=0; j<=i; j++){
         int temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
      printf("\n");
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
               printf("%d ",arr[i][j]); 
            }
            printf("\n");
        }
    for(int i=0; i<n; i++){
        int j=0;  
           int k=n-1;
        while(j<k){
            int temp = arr[i][j];
            arr[i][j] = arr[i][k];
            arr[i][k] = temp;
            j++;
            k--;
        }
        printf("\n");
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
               printf("%d ",arr[i][j]); 
            }
            printf("\n");
        }
    }
    return 0;
}